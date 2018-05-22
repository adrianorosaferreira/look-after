export class Category {
    id: number | null;
    name = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
