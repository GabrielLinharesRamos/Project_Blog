import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

  function formatViews(views) {
    if (views >= 1000) {
      return (views / 1000).toFixed(views % 1000 === 0 ? 0 : 1) + 'k';
    }
    if (views >= 100) {
      return (views / 1000).toFixed(1) + 'k';
    }
    return views.toString();
  }

export async function getPostById(id) {
  const page = await notion.pages.retrieve({ page_id: id });

  return {
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text,
    slug: page.properties.Slug.rich_text[0]?.plain_text,
    content: page.properties.Content.rich_text[0]?.plain_text,
    views: formatViews(page.properties.Views?.number || 0),
    date: page.properties.Date.date.start,
    mdxContent: (page.properties.MDX.rich_text || []).map(rt => rt.plain_text).join(""),
  };
}

export async function getPosts() {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    sorts: [{ property: "Date", direction: "descending" }],
  });
  return res.results.map(page => ({
    id: page.id,
    title: page.properties.Title.title[0].plain_text,
    slug: page.properties.Slug.rich_text[0]?.plain_text,
    content: page.properties.Content.rich_text[0]?.plain_text,
    views: formatViews(page.properties.Views?.number || 0),
    date: page.properties.Date.date.start,
  }));
}
