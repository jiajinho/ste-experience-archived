import React, { useState } from 'react';
import styled from 'styled-components';
import { Html } from '@react-three/drei';
import Image from 'next/image';

const HtmlWrapper = styled(Html)`
  aspect-ratio: 2/1.5;
  width: 400px;

  background: white;
  overflow: auto;

  padding: 30px;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: start;
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  aspect-ratio: 1/1;
  height: auto;
  width: 100px;

  img {
    object-fit: cover;
  }
`;

export default () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    window.alert(`Hello, ${name}`);
  }


  return (
    <HtmlWrapper transform occlude position={[10, 5, -5]}>
      <Container>
        <ImageContainer>
          <Image
            src="/static/sunflower.jpg"
            alt="sunflower"
            fill
          />
        </ImageContainer>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facilis?
        </p>
      </Container>

      <label>
        What is your name?
      </label>
      <input value={name} onChange={e => setName(e.target.value)} />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </HtmlWrapper>
  );
}