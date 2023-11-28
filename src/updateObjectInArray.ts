interface ObjectShape {
    userId: number,
    id: number,
    title: string,
    body: string
}

export async function getAPIArray<T>(callback: Promise<T>): Promise<ObjectShape[]> {
    const apiArray = await callback.then();
    return apiArray as ObjectShape[];
}

export async function updateObjectInArray<T extends keyof ObjectShape>(
    initialArray: ObjectShape[],
    key: T,
    value: ObjectShape[T],
    patch: Partial<ObjectShape>): Promise<ObjectShape[]> {
    const indexToUpdate = initialArray.findIndex((obj) => obj[key] === value);

    const copiedArray = [...initialArray];
    if (indexToUpdate !== -1) {
        copiedArray[indexToUpdate] = {
            ...copiedArray[indexToUpdate],
            ...patch,
        };
    }

    return copiedArray;
}
