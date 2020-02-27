export class Post {
  body: string;
  createdAt: string;
  id: number;
  status: string;
  title: string;

  constructor(props) {
    this.id = props.id;
    this.body = props.attributes['body'];
    this.title = props.attributes['title'];
    this.status = props.attributes['status'];
    this.createdAt = props.attributes['created_at'];
  }

  get data() {
    return null;
  }
}
