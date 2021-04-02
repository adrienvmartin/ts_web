interface UserProps {
  name: string;
  age: number;
}

export class user {
  constructor(private data: UserProps) {}
}
