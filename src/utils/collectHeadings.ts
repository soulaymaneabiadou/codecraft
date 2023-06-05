import { slugifyWithCounter } from '@sindresorhus/slugify';

const getNodeText = (node: any) => {
  let text = '';
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child;
    }
    text += getNodeText(child);
  }
  return text;
};

const collectHeadings = (nodes: any, slugify = slugifyWithCounter()): any[] => {
  let sections = [];

  for (let node of nodes) {
    if (/^h[123456]$/.test(node.name)) {
      let title = getNodeText(node);
      if (title) {
        let id = slugify(title);
        node.attributes.id = id;
        node.attributes.level = node.name;
        const currentLevel =
          sections[sections.length - 1]?.level.split('')[1] || 1;
        const nodeLevel = node.name.split('')[1];

        if (sections.length > 0 && +currentLevel < +nodeLevel) {
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title
          });
        } else {
          sections.push({ ...node.attributes, title, children: [] });
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify));
  }

  return sections;
};

export default collectHeadings;
