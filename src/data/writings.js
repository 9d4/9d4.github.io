/**
 * Listing of writings contents.
 * Key is the slug, means key and slug should be same.
 * example:
 * test: {
 *     title: "Test Test <h>1</h1>",
 *     date: "2022-03-13 08:09",
 *     content: "/contents/test.md",
 *     slug: "test",
 *     unlisted: true | false
 * }
 */

export const writings = {
  'thp-db': {
    title: 'Database tl;dr',
    date: '2022-07-24 18:18',
    content: '/contents/th/db.md',
    slug: 'thp-db',
    unlisted: true,
  },
  'configure-mikrotik-with-ciscoap': {
    title: 'Configure Mikrotik with Cisco Aironet 3500 Series',
    date: '2022-10-17 11:03',
    content: '/contents/configure-mikrotik-with-ciscoap.md',
    slug: 'configure-mikrotik-with-ciscoap'
  }
};
