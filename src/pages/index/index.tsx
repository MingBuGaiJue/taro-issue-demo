import { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { AtTextarea } from "taro-ui";

import "./index.less";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
    value: string;
  };
};

interface Index {
  props: PageStateProps;
  state: {
    value: string;
  };
}

@inject("store")
@observer
class Index extends Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.state = { value: "" };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  render() {
    return (
      <View className='index '>
        <View className='box'>
          <AtTextarea
            value={this.state.value}
            onChange={(event) => {
              console.log(this.state.value);
              this.setState({ value: event });
            }}
          ></AtTextarea>
        </View>
      </View>
    );
  }
}

export default Index;
