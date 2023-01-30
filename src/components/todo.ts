class Todo {
    id: string;
    text: string;

    constructor(text: string) {
        //id를 현재 일시로 겹치지 않게 지정하면 따로 id를 정하지 않아도 된다.
        this.id = new Date().toLocaleString();
        this.text = text;
    }
}

export default Todo;