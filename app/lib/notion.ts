import React from 'react';
const { Client } = require('@notionhq/client');
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});
const { NotionToMarkdown } = require('notion-to-md');
const n2m = new NotionToMarkdown({ notionClient: notion });
interface tagsType {
  id: string;
  name: string;
  color: string;
}

function getToday(datestring: string) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;

  return today;
}

const getPageMetaData = (post: any) => {
  const getTags = (tags: tagsType[]) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });

    return allTags;
  };
  console.log(post);

  return {
    id: post?.id,
    coverImg: post?.properties?.coverImg?.files[0]?.external?.url,
    title: post?.properties?.Name?.title[0]?.plain_text,
    tags: getTags(post?.properties?.Tags?.multi_select),
    description: post?.properties?.Description?.rich_text[0]?.plain_text,
    date: getToday(post?.properties?.Date?.created_time),
    slug: post?.properties?.Slug?.rich_text[0]?.plain_text,
  };
};

// getting all the blogs
export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DB_ID!,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  const allPosts = posts.results;

  return allPosts.map((post: any) => {
    return getPageMetaData(post);
  });
};

// getting post by the slug
export const getSingleBlogPostBySlug = React.cache(async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DB_ID,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    metadata,
    markdown: mdString,
  };
});
