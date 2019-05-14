export interface BaseInterfaceImpl{
    findById(id: string);
    findAll(page: number, count: number)
    delete(id: string);
    save();
}
