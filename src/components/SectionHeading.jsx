/* eslint-disable react/prop-types */
import styled from "styled-components";

const SectionHeading = ({ text }) => {
  return (
    <>
      <Heading>{text}</Heading>
    </>
  );
};

const Heading = styled.h2`
  color: #9d000e;
  font-weight: 700;
  text-align: center;
  padding-top: 20px;
  page-break-after: 30px;
`;

export default SectionHeading;
