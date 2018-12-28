import React from "react";
import { Image, SafeAreaView } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["Dashboard"];

export default class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image source={{ uri: "https://png.pngtree.com/thumb_back/fw800/back_pic/00/12/19/71563b0efa81db0.png"}}
                style={{
                  height: 120,
                  alignSelf: "stretch",
                  justifyContent: "center",
                  alignItems: "center"
                }} />

          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
