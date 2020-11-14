const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${entries}.`);
}

export default { fetchEntries };
