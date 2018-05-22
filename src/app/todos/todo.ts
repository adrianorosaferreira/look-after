export class Todo {
    id: number | null;
    title = '';
    complete = false;
    category: number | null;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
