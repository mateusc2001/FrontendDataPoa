export interface InterfaceBaseService<T> {
    createOrUpdate(object: T);
    delete(id: string);
    findById(id: string);
    findAll(page: number, count: number);
}
