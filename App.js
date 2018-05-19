import React from 'react';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Right, Left, CheckBox, Button, Icon } from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      small: true,
      smallPlus: false,
      medium: false,
      large: false,
      sideline1: true,
      sideline2: false,
      drink1: true,
      drink2: false,
      drink3: false,
      drink4: false
    }
  }

  onCheckBoxPress = (value) => {

    if (value == "small") {
      this.setState({
        small: !this.state.small,
        smallPlus: false,
        medium: false,
        large: false
      })
    }
    if (value == "smallPlus") {
      this.setState({
        small: false,
        smallPlus: !this.state.smallPlus,
        medium: false,
        large: false
      })
    }
    if (value == "medium") {
      this.setState({
        small: false,
        smallPlus: false,
        medium: !this.state.medium,
        large: false
      })
    }
    if (value == "large") {
      this.setState({
        small: false,
        smallPlus: false,
        medium: false,
        large: !this.state.large
      })
    }
  }

  sidelineCheckBoxListener = (value) => {

    if (value == "sideline1") {
      this.setState({
        sideline1: !this.state.sideline1,
        sideline2: false
      })
    }
    if (value == "sideline2") {
      this.setState({
        sideline1: false,
        sideline2: !this.state.sideline2
      })
    }
  }

  colddrinkCheckBoxListener = (value) => {

    if (value == "drink1") {
      this.setState({
        drink1: !this.state.drink1,
        drink2: false,
        drink3: false,
        drink4: false
      })
    }
    if (value == "drink2") {
      this.setState({
        drink1: false,
        drink2: !this.state.drink2,
        drink3: false,
        drink4: false
      })
    }
    if (value == "drink3") {
      this.setState({
        drink1: false,
        drink2: false,
        drink3: !this.state.drink3,
        drink4: false
      })
    }
    if (value == "drink4") {
      this.setState({
        drink1: false,
        drink2: false,
        drink3: false,
        drink4: !this.state.drink4
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header androidStatusBarColor="#E53935" style={{ backgroundColor: "#E53935" }} />
        <Container>
          <Content style={styles.card}>
            <Text style={styles.cardHeader}>Choose Pizza Size</Text>
            <Card>
              <CardItem>
                <Body>
                  <CardItem style={styles.cardItem}>
                    <Left style={styles.left}>
                      <Text>Small</Text>
                    </Left>
                    <Text>RS 199</Text>
                    <CheckBox checked={false} style={styles.checkbox} color="#f4ca41" onPress={() => this.onCheckBoxPress("small")} checked={this.state.small} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Left style={styles.left}>
                      <Text>Small Plus</Text>
                    </Left>
                    <Text>RS 399</Text>
                    <CheckBox checked={false} style={styles.checkbox} color="#f4ca41" onPress={() => this.onCheckBoxPress("smallPlus")} checked={this.state.smallPlus} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Left style={styles.left}>
                      <Text>Medium</Text>
                    </Left>
                    <Text>RS 599</Text>
                    <CheckBox checked={false} style={styles.checkbox} color="#f4ca41" onPress={() => this.onCheckBoxPress("medium")} checked={this.state.medium} />
                  </CardItem>
                  <CardItem style={{ marginBottom: -10, marginTop: -10 }}>
                    <Left style={styles.left}>
                      <Text>Large</Text>
                    </Left>
                    <Text>RS 799</Text>
                    <CheckBox checked={false} style={styles.checkbox} color="#f4ca41" onPress={() => this.onCheckBoxPress("large")} checked={this.state.large} />
                  </CardItem>
                </Body>
              </CardItem>
            </Card>

            <Text style={styles.cardHeader}>Choose Sidelines</Text>
            <Card>
              <CardItem>
                <Body>
                  <CardItem style={styles.cardItem}>
                    <Left style={styles.left}>
                      <Text>Hot Wings</Text>
                    </Left>
                    <Text>RS 150</Text>
                    <CheckBox checked={false} style={styles.checkbox} color="#f4ca41" onPress={() => this.sidelineCheckBoxListener("sideline1")} checked={this.state.sideline1} />
                  </CardItem>
                  <CardItem style={{ marginBottom: -10, marginTop: -10 }}>
                    <Left style={styles.left}>
                      <Text>Nuggets</Text>
                    </Left>
                    <Text>RS 100</Text>
                    <CheckBox checked={false} style={styles.checkbox} color="#f4ca41" onPress={() => this.sidelineCheckBoxListener("sideline2")} checked={this.state.sideline2} />
                  </CardItem>
                </Body>
              </CardItem>
            </Card>

            <Text style={styles.cardHeader}>Choose Cold Drink</Text>
            <Card>
              <CardItem>
                <Body>
                  <CardItem style={styles.cardItem}>
                    <Left style={styles.left}>
                      <Text>Coke</Text>
                    </Left>
                    <Text>RS 110</Text>
                    <CheckBox checked={false} style={styles.checkbox} color="#f4ca41" onPress={() => this.colddrinkCheckBoxListener("drink1")} checked={this.state.drink1} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Left style={styles.left}>
                      <Text>Sprite</Text>
                    </Left>
                    <Text>RS 110</Text>
                    <CheckBox checked={false} style={styles.checkbox} color="#f4ca41" onPress={() => this.colddrinkCheckBoxListener("drink2")} checked={this.state.drink2} />
                  </CardItem>
                  <CardItem style={styles.cardItem}>
                    <Left style={styles.left}>
                      <Text>Fanta</Text>
                    </Left>
                    <Text>RS 110</Text>
                    <CheckBox checked={false} style={styles.checkbox} color="#f4ca41" onPress={() => this.colddrinkCheckBoxListener("drink3")} checked={this.state.drink3} />
                  </CardItem>
                  <CardItem style={{ marginBottom: -10, marginTop: -10 }}>
                    <Left style={styles.left}>
                      <Text>Sting</Text>
                    </Left>
                    <Text>RS 100</Text>
                    <CheckBox checked={false} style={styles.checkbox} color="#f4ca41" onPress={() => this.colddrinkCheckBoxListener("drink4")} checked={this.state.drink4} />
                  </CardItem>
                </Body>
              </CardItem>
            </Card>
            <View style={{ height: 20 }}></View>
          </Content>

          <View style={{ backgroundColor: "#E53935", justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Button transparent style={{ marginTop: 5, marginBottom: 5 }}><Icon style={{ color: "white" }} name="md-menu" /><Text style={{ color: "#f4ca41", marginLeft: -20 }}>Save & Return</Text></Button>
              <Button transparent style={{ marginTop: 5, marginBottom: 5 }}><Icon style={{ color: "white" }} name="md-cart" /><Text style={{ color: "#f4ca41", marginLeft: -20 }}>Save & Proceed</Text></Button>
            </View>
            <Text style={{ color: "white", alignSelf: 'center', paddingBottom: 5 }}>Total Price: RS. 1500</Text>
          </View>

        </Container>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  left: {
    marginLeft: -20
  },
  cardHeader: {
    color: "#E53935",
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold',
    marginTop: 5
  },
  card: {
    padding: 10,
  },
  checkbox: {
    borderColor: "#f4ca41"
  },
  cardItem: {
    marginTop: -10
  }
});
