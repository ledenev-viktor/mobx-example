import React from 'react';
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
import { Form, Button } from "react-bootstrap";

export const GithubUserDetails = observer(() => {
  const {
    rootStore: { githubUserDetails },
  } = useStore();

  const [text, setText] = React.useState('');
  const onClickButton = () => {
    githubUserDetails.fetchGithubUserDetails(text);
  }
  return (
    <div>
        <div>User Name: {githubUserDetails.getUserDetails?.name || 'данные отсутсвуют'}</div>
        <div>User Location: {githubUserDetails.getUserDetails?.location || 'данные отсутсвуют'}</div>
        <Form>
          <Form.Group className="mb-3" controlId="githubuser">
            <Form.Label>Search github user</Form.Label>
            <Form.Control value={text} onChange={(event) => setText(event.target.value)} type="text" placeholder="Enter github user" />
          </Form.Group>
          <Button onClick={onClickButton} variant="primary">Search</Button>
        </Form>
    </div>
      );
});
