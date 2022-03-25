import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  };

  listComments() {
    // Code for listing comments
    return (
      <View>
        <Text>Comments</Text>
      </View>
    )
  }

  addComment(event) {
    // Code for adding new comments to the list
  }

  render(props) {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <View>
            <Text>Post</Text>
          </View>
          <View>
            <Text>Post Metadata</Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <TextInput mode='outlined' label='Comment' onSubmitEditing={this.addComment} />
          </View>
          {this.listComments()}
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingVertical: 60,
    paddingHorizontal: 20
  }
});
