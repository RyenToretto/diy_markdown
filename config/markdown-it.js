import MarkdownIt from 'markdown-it'



markdown.use(markdownitIncrementalDOM, IncrementalDOM)
  .use(emoji)
  .use(ins)
  .use(mark)
  .use(footnote)
  .use(sup)
  .use(sub)
  .use(todo, { label: true })

export default markdown
