//PascalCasing for component names
function Message(){
    //JSX: JavaScript XML; not HTML
    const name = 'Abishka';
    if(name){
    return <h1>Hello {name}</h1>;
    }
    return <h1>Hello World!</h1>;
}
 export default Message;