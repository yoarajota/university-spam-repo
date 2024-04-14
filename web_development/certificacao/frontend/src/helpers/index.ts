// @ts-nocheck

export const handleInput = (event: ChangeEvent<HTMLInputElement>, setter: Function) => {
    setter((prev: any) => ({
        ...prev,
        [event.target.id]: event.target?.value ?? null
    }))
}