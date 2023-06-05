import { useCallback, useEffect, useState } from 'react';

const useTableOfContents = (tableOfContents: any) => {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id);

  let getHeadings = useCallback(() => {
    function* traverse(node: any): any {
      if (Array.isArray(node)) {
        for (let child of node) {
          yield* traverse(child);
        }
      } else {
        let el = document.getElementById(node.id);
        if (!el) return;

        let style = window.getComputedStyle(el);
        let scrollMt = parseFloat(style.scrollMarginTop);

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
        yield { id: node.id, top };

        for (let child of node.children ?? []) {
          yield* traverse(child);
        }
      }
    }

    return Array.from(traverse(tableOfContents));
  }, [tableOfContents]);

  useEffect(() => {
    let headings: any = getHeadings();
    if (tableOfContents.length === 0 || headings.length === 0) return;
    const onScroll = () => {
      let sortedHeadings = headings
        .concat([])
        .sort((a: any, b: any) => a.top - b.top);

      let top = window.pageYOffset;
      let current = sortedHeadings[0].id;
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (top >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id;
        }
      }
      setCurrentSection(current);
    };
    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true
    });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll, {
        capture: true,
        // @ts-ignore
        passive: true
      });
    };
  }, [getHeadings, tableOfContents]);

  return currentSection;
};

export default useTableOfContents;
