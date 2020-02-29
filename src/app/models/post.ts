export class Post {
  body?: string;
  createdAt: string;
  id: number;
  status: string;
  title: string;

  constructor(props) {
    this.body = props.body;
    this.createdAt = props.created_at;
    this.id = props.id;
    this.title = props.title;
    this.status = props.status;
  }
}
