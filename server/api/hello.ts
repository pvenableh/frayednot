export default defineEventHandler(async (event) => {
  // const query = await getQuery(event)
  const body = await readBody(event)
  console.log("hello")
  console.log(body.name)
  return {
    // data: `Hello ${query.name} 👋`,
    data: `Hey ${body.name} 👋 🐶`,
  }
  
})
// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)
//   return {
//     data: `Hello ${body.name} 👋`,
//   }
// })