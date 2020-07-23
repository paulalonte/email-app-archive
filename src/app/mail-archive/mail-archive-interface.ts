export interface IEmail {
    id: number;
    from: string;
    to: string;
    subject: string;
    date: string;
    isAttachement?: boolean;
    content: string;
}