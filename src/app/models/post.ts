export class Post {
  id: number;
  title: string;
  body: string;
  status: string;

  constructor(props) {
    this.id = props.id;
    this.body = props.attributes['body'];
    this.title = props.attributes['title'];
    this.status = props.attributes['status'];
  }
}
