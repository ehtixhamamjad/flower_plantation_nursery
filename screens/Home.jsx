import { View, Text, StyleSheet, StatusBar, ScrollView,TouchableOpacity,TextInput } from "react-native";
import Flower from "../components/Flower";
import Icon from "react-native-vector-icons/Entypo"
import { Dialog, Button } from "react-native-paper"
import React, { useEffect, useState } from 'react'


const Home = ({ navigation }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const hideDialog = () => {
      setOpenDialog(!openDialog)
  }
  const tasks = [
    {
      title: "My Tasks",
      discription: "My tasks discovered",
      completed: true,
      _id: "1",
    },
    {
      title: "My Tasks 2",
      description: "My tasks discovered",
      completed: true,
      _id: "12",
    },
  ];
  return (
    <>
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView>
        <Text style={styles.heading}>All Flowers</Text>
        {tasks.map((item) => (
          <Flower
            key={item._id}
            title={item.title}
            description={item.description}
            status={item.completed}
            taskId={item._id}
          />
        ))}
        <TouchableOpacity style={styles.addBtn} onPress={hideDialog}>
          <Icon name="add-to-list" size={20} color="#900" />
        </TouchableOpacity>
      </ScrollView>
    </View>
    <Dialog visible={openDialog} onDismiss={hideDialog} >
                <Dialog.Title>ADD A Flower</Dialog.Title>
                <Dialog.Content>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        value={description}
                        onChangeText={setDescription}
                    />

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={hideDialog} >
                            <Text>CANCEL</Text>
                        </TouchableOpacity>
                        <Button
                            // onPress={addTaskHandler}
                            color="#900"
                            // disabled={!title || !description || loading}
                            disabled={!title || !description}
                        >
                            ADD
                        </Button>
                    </View>
                </Dialog.Content>
            </Dialog>
    </>
  );
};

export default Home

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        textAlign: "center",
        marginTop: 25,
        marginBottom: 20,
        color: "#fff",
        backgroundColor: "#474747",
    },
    addBtn: {
        backgroundColor: "#fff",
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        alignSelf: "center",
        marginVertical: 20,
        elevation: 5,
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 15,
        fontSize: 15,
    }
})