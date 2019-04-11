import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  font-size: 14px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 25px;
  border: 1px solid #efefef;
  padding: 4px;
`;

const LayoutVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaData = styled.div`
  margin: auto 0 auto 10px;
  margin-left: 15px;
  font-style: italic;
`;

const MetaDataDate = styled(MetaData)`
  font-size: 11px;
`;

const propTypes = {
  author: PropTypes.string,
  date: PropTypes.number
};

const defaultProps = {
  author: "",
  date: 0
};

const getStringDate = date => {
  return new Date(date * 1000).toDateString();
};

const UserDetails = ({ author, date }) => {
  return (
    <Container>
      <Avatar
        src={`https://avatars.dicebear.com/v2/identicon/${author}.svg`}
        alt="avatar"
      />
      <LayoutVertical>
        <MetaData>{author}</MetaData>
        <MetaDataDate>{getStringDate(date)}</MetaDataDate>
      </LayoutVertical>
    </Container>
  );
};

UserDetails.propTypes = propTypes;
UserDetails.defaultProps = defaultProps;

export default React.memo(UserDetails);

export { Avatar, MetaData, MetaDataDate, getStringDate };
