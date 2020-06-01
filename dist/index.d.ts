export default function attempt<T>(promise: Promise<T>, defaultValue?: T): Promise<Result<T>>;
export interface Result<T> {
    ok: boolean;
    error: any;
    data: T;
}
