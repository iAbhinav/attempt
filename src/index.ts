export default function attempt<T>(promise: Promise<T>, defaultValue?: T): Promise<Result<T>> {
    return promise
        .then(value => ({ ok: true, error: undefined, data: value }))
        .catch(reason => defaultValue
            ? { ok: true, error: reason, data: defaultValue }
            : { ok: false, error: reason, data: undefined })
}

export interface Result<T> {
    ok: boolean;
    error: any;
    data: T
}