import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './env';

firebase.initializeApp(firebaseConfig);
const fireAuth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage().ref();

// SIGN IN SIGN UP 

//UDAH BISA
export const signUp = async (newUserData) => {
  const { email, password, name, phoneNumber, role, prefferedTopics } = newUserData;
  fireAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
          db.collection('users').add({
              email: email,
              name: name,
              phoneNumber: phoneNumber,
              role: role,
              prefferedTopics: prefferedTopics,
          });
          console.log('SUCCESS SIGNUP');

      })
      .catch(error => alert(error.message));      // buat kalau udah pernah di daftarin or somethng
}
//UDAH BISA
export const signIn = async (email, password) => {
  let usertest = "";
  fireAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
          usertest = getUserByEmail(email);
          console.log('SUCCESS SIGNin');
      })
      .catch(error => console.log('FAILED SIGNIN'))
  return usertest;
}

// GENERAL
//UDAH BISA
export const uploadImage = async (uri, imageFulPath) => { // TAMBAHIN PARAM NAMA FILE
  const response = await fetch(uri);
  const blob = await response.blob();
  var ref = storage.child(imageFulPath);
  return ref.put(blob);
}
//UDAH BISA
export const getImageUrlByImageRef = async (imageRef) => {
  const response = imageRef.getDownloadURL().then((url) => {           // hasilnya masih sering lari2
      return url;
  }).catch(function (error) {
      console.log(error)
  });
  return response;
}

// UMKM POST
// image path masi bentuk promise arr
export const getAllUmkmPost = async () => {
  const getAllId = async () => {
      const responseUmkm = await db.collection('umkmPost').get();
      const dataUmkm = responseUmkm.docs.map(doc => doc.id);
      return dataUmkm;
  }

  const allId = await getAllId();

  const getAllPost = async (result) => {
      return Promise.all(
          result.map((umkmPostId) => {
              const umkmPost = getUmkmPostById(umkmPostId)
              const umkmImage = getSingleImageByUmkmPostId(umkmPostId)
              return { umkmPost: umkmPost, umkmImage: umkmImage };
          }));
  };
  const allPost = await getAllPost(allId);
  return allPost;

  // const response = await db.collection('umkmPost').orderBy('timeStamp').get();
  // const data = response.docs.map(doc => {
  //     const responseId = doc.id;
  //     let responseData = doc.data();
  //     responseData.imagePath = getAllMediaByUmkmPostId(responseId);       // image path masi bentuk promise arr
  //     return { classId: responseId, ...responseData }
  // });
  // const dataResult = Promise.all(data);
  // return dataResult;
}
// MESTINYA UDA BISA
export const getSingleImageByUmkmPostId = async (umkmPostId) => {
  const doc = await db.collection('umkmPost').doc(umkmPostId).get();
  const fpath = '/umkm-post-files/' + umkmPostId + '/' + doc.data().filePath;
  console.log('fpath = ', fpath)
  const response = storage.child(fpath).getDownloadURL().then((url) => {           // hasilnya masih sering lari2
      return url;
  }).catch(function (error) {
      console.log(error)
  });
  return response;

}


//UDAH BISA
export const getAllMediaByUmkmPostId = async (umkmPostId) => {
  const getAllMedia = async (result) => {
      return Promise.all(
          result.map((imageRef) => { return getImageUrlByImageRef(imageRef) }));
  };
  const folderPath = '/umkm-post-files/' + umkmPostId;
  const fileNames = await storage.child(folderPath).listAll();
  console.log('fileNames');
  console.log(fileNames.items);
  const allMedia = await getAllMedia(fileNames.items);
  console.log(allMedia);
  return allMedia;
}
//UDAH BISA
export const createUmkmPost = async (umkmPostData) => {
  const { userId, title, description, minPrice, maxPrice, topics, location } = umkmPostData;
  const response = await db.collection('umkmPost').add({
      userId: userId,
      title: title,
      description: description,
      minPrice: minPrice,
      maxPrice: maxPrice,
      topics: topics,
      location: location,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  const umkmPostId = response.id;
  return umkmPostId;
}

export const getUmkmPostById = async (umkmPostId) => {
  const doc = await db.collection('umkmPost').doc(umkmPostId).get();
  const responseId = doc.id;
  let responseData = doc.data();
  return { classId: responseId, ...responseData }
}


// DM POST
//UDAH BISA
export const createDMPost = async (DMPostData) => {
  const { userId, title, description, topics, location, filePath } = DMPostData
  await db.collection('dmPost').add({
    userId: userId,
    topics: topics,
    title: title,
    desc: description,
    location: location,
    comments: [],
    like: [],
    filePath: filePath,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp()
  });
}
// IMAGE NYA BLM BISA, NUNGGU YG KYK UMKM POST BISA DULU
export const getAllDMPostByUserId = async (userId) => {
  const response = await db.collection('dmPost').where("userId", "==", userId).get();
  const data = response.docs.map(doc => {
      const responseId = doc.id;
      const responseData = doc.data();
      return { classId: responseId, ...responseData }
  });
  return data;
}

export const getAllDMPost = async () => {
  const response = await db.collection('dmPost').orderBy("timeStamp").get();
  const data = response.docs.map(doc => {
      const responseId = doc.id;
      const responseData = doc.data();
      return { classId: responseId, ...responseData }
  });
  return data;
}

//USER
//UDAH BISA
export const getUserById = async (userId) => {
  const response = await db.collection('users').doc(userId).get();
  const responseId = response.id;
  const responseData = response.data();
  return { userId: responseId, ...responseData };
}
//UDAH BISA
export const getUserByEmail = async (email) => {
  const response = await db.collection('users').where("email", "==", email).get();
  const data = response.docs.map(doc => {
      const responseId = doc.id;
      const responseData = doc.data();
      return { userId: responseId, ...responseData }
  });
  return data;
}


export const addCommentByPostID = async (postID) => {

}

export const getChatByChatID = async (chatID) => {

}

export const getChatRoom = async (userIDs)=>{
  const {DMID, UMKMID} = userIDs;
  const response = await db.collection('chat').where("DMID", "==", DMID).where("UMKMID", "==", UMKMID).get();
  const result = response.docs.map(doc=>doc.id);
  console.log('================');
  console.log(result);
  return result;
}

export const addNewChatRoom = async (user1, user2) => {
  const response = await db.collection('chat').add({
      userIds: [user1, user2],
  });
  return response;
}

export const addChatTextByChatRoomID = async (chatData) => {
  const { chatRoomID, message, senderID } = chatData
  const response = await db.collection('chat').doc(chatRoomID).collection('chat').add({
      message: message,
      senderID: senderID,
      time: firebase.firestore.FieldValue.serverTimestamp()
  });
  return response;
}

export const addChatFileByChatRoomID = async (chatData) => {
  const { chatRoomID, filePath, senderID } = chatData
  const response = await db.collection('chat').doc(chatRoomID).collection('chat').add({
      filePath: filePath,
      senderID: senderID,
      time: firebase.firestore.FieldValue.serverTimestamp()
  });
  return response;
}

// export const getAllCommentsByPostID = async (postID) => {

// }

// export const deleteCommentByPostID = async (postID, commentID) => {

// }

// export const getFollowersByUserID = async (userID) => {

// }

// export const getFollowingsByUserID = async (userID) => {

// }

// export const followUserByUserID = async (UserID) => {

// }

// export const getDMReview = async (DMID) => {

// }

// export const addDMReviewByTransaction = async (DMID, score) => {

// }

// export const getUMKMReview = async (UMKMID) => {

// }

// export const addUMKMReviewByTransaction = async (UMKMID, score) => {

// }

//TRANSACTION 
export const getAllTransactionHistory = async (userID) => {
  const response1 = await db.collection('transaction').where("userId1", "==", userID).get();
  const response2 = await db.collection('transaction').where("userId2", "==", userID).get();

  const data1 = response1.docs.map(doc => {
      const responseId = doc.id;
      const responseData = doc.data();
      responseData.partnerId = responseData.userId2
      return { classId: responseId, ...responseData }
  });

  const data2 = response2.docs.map(doc => {
      const responseId = doc.id;
      const responseData = doc.data();
      responseData.partnerId = responseData.userId1
      return { classId: responseId, ...responseData }
  });
  const newArr = data1.concat(data2);
  // console.log('GET PROS');
  // console.log(data);
  return newArr;
}
// BELOM NYOBA
export const updateTransaction = async (transactionId, newStatus) => {
  await db.collection('transaction').doc(transactionId).update({
      status: newStatus
    })
}

// PROSPECT TRANSACTION
// UDAH BISA
export const getProspectTransactionByReceiverId = async (receiverId) => {   // mksdnya user id yg lgi login
  const response = await db.collection('prospectTransaction').where("receiverId", "==", receiverId).get();
  const data = response.docs.map(doc => {
      const responseId = doc.id;
      const responseData = doc.data();
      return { classId: responseId, ...responseData }
  });
  // console.log('GET PROS');
  // console.log(data);
  return data;
}
//UDAH BISA
export const getProspectTransactionByProsTransId = async (prosTransId) => {   // mksdnya user id yg lgi login
  const doc = await db.collection('prospectTransaction').doc(prosTransId).get();
  const responseId = doc.id;
  const responseData = doc.data();
  console.log('res id = ', responseId, ' response data = ', responseData);
  return { classId: responseId, ...responseData }
}

// UDAH BISA
export const addProspectTransaction = async (prospectTransactionData) => {
  const { bidPrice, message, receiverId, senderId } = prospectTransactionData;
  const response = await db.collection('prospectTransaction').add({
      bidPrice: bidPrice,
      message: message,
      receiverId: receiverId,
      senderId: senderId,
      status: 'NEW'
  });
  const respId = response.id;
  return respId;
}

export const updateProspectTransaction = async (prosTransId, newStatus) => {
  await db.collection('prospectTransaction').doc(prosTransId).update({
      status: newStatus
    })
}


export const convertProspectToTransaction = async (transactionProspectID) => {
  await updateProspectTransaction(transactionProspectID, 'ACCEPT')
  const prospectRes = await getProspectTransactionByProsTransId(transactionProspectID);
  const response = await db.collection('transaction').add({
      transactionNo: 'TRN123123',
      price: prospectRes.bidPrice,
      message: prospectRes.message,
      userId1: prospectRes.receiverId,
      userId2: prospectRes.senderId,
      status: 'Menunggu penyelesaian kontrak kerja'
  });
}