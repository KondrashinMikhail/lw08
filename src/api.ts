export interface GithubRepo {
    id: number;
    name: string;
    description: string | null;
}

export const getData = async () => {
    return await fetch(`https://api.github.com/users/KondrashinMikhail/repos`)
    .then(res => res.json())
    .then((res: GithubRepo[]) => {
        return res
    })
};