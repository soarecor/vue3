import { h } from 'vue'

const TextContent = (props, { slots, emit, attrs }) => {
  console.log(props)
  return h(
    props.type,
    {
      class: 'text-content',
      onClick(e) {
        emit('click', e)
      }
    },
    props.content
  )
}

TextContent.emits = ['click']
TextContent.props = ['type', 'content']
export default TextContent

// import TextContent from './components/Text.js'

// const textValue = ref([
//   { id: 1, type: 'h1', content: 'This is awesome' },
//   { id: 2, type: 'p', content: 'This too' }
// ])

// const handleClick = e => {
//   console.log('click from inside App.vue', e)
// }

{
  /* <div>
<TextContent
  v-for="{ id, type, content } in textValue"
  :key="id"
  :type="type"
  :content="content"
  @click="handleClick"
/>
</div> */
}
