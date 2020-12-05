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
//PARENT BEBAS
export const uploadImage = async (uri, imageFulPath) => { // TAMBAHIN PARAM NAMA FILE
  const response = await fetch(uri);
  const blob = await response.blob();
  var ref = storage.child(imageFulPath);
  return ref.put(blob);
}
//UDAH BISA
export const getImageUrlByImageRef = async (imageRef) => {
  const response = await imageRef.getDownloadURL().then((url) => {           // hasilnya masih sering lari2
      return url;
  }).catch(function (error) {
      console.log(error)
  });
  return response;
}

// UMKM POST
// UDAH BISA, BEBAS PROMISE
export const getAllUmkmPost = async () => {
  const getAllId = async () => {
      const responseUmkm = await db.collection('umkmPost').orderBy('timeStamp').get();
      const dataUmkm = responseUmkm.docs.map(doc => doc.id);
      return dataUmkm;
  }

  const allId = await getAllId();
  const getAllPost = async (result) => {
      return Promise.all(
          result.map(async (umkmPostId) => {
              const umkmPost = await getUmkmPostById(umkmPostId)
              const umkmImage = await getSingleImageByUmkmPostId(umkmPostId)
              return { dataPost: umkmPost, dataImage: umkmImage };
          }));
  };
  const allPost = await getAllPost(allId);
  // console.log('allpost = ', allPost);
  return allPost;
}

export const getUmkmPostByUserId = async (userId) => {
  const getAllId = async () => {
      const responseUmkm = await db.collection('umkmPost').where('userId','==',userId).orderBy('timeStamp').get();
      const dataUmkm = responseUmkm.docs.map(doc => doc.id);
      return dataUmkm;
  }

  const allId = await getAllId();
  const getAllPost = async (result) => {
      return Promise.all(
          result.map(async (umkmPostId) => {
              const umkmPost = await getUmkmPostById(umkmPostId)
              const umkmImage = await getSingleImageByUmkmPostId(umkmPostId)
              return { dataPost: umkmPost, dataImage: umkmImage };
          }));
  };
  const allPost = await getAllPost(allId);
  // console.log('allpost = ', allPost);
  return allPost;
}


// uda bisa
export const getAllRolePost = async () => {
      const a1 = await getAllUmkmPost();
      const a2 = await getAllDMPost();

      const newArr = async (dt1, dt2) =>{
          let dt = dt1.concat(dt2);
          dt.sort(function(a, b){
              return a.dataPost.timeStamp.seconds -b.dataPost.timeStamp.seconds;
          })
          return dt;
      }
      return newArr(await getAllUmkmPost(), await getAllDMPost());
}
// UDA BISA BEBAS
export const getSingleImageByUmkmPostId = async (umkmPostId) => {
  const doc = await db.collection('umkmPost').doc(umkmPostId).get();
  const fpath = '/umkm-post-files/' + umkmPostId + '/' + doc.data().filePath;
  const response = await storage.child(fpath).getDownloadURL().then((url) => {           // hasilnya masih sering lari2
      return url;
  }).catch(function (error) {
      console.log(error)
  });
  return response;
}

// export const searchUmkmPostByTitle = async (queryStr) => {
//     const getAllId = async () => {
//         const responseUmkm = await db.collection('umkmPost').ref().orderBy('title').startAt(queryStr)
//         .endAt(queryStr + "\uf8ff").get();
//         const dataUmkm = responseUmkm.docs.map(doc => doc.id);
//         return dataUmkm;
//     }

//     const allId = await getAllId();
//     const getAllPost = async (result) => {
//         return Promise.all(
//             result.map(async (umkmPostId) => {
//                 const umkmPost = await getUmkmPostById(umkmPostId)
//                 const umkmImage = await getSingleImageByUmkmPostId(umkmPostId)
//                 return { umkmPost: umkmPost, umkmImage: umkmImage };
//             }));
//     };
//     const allPost = await getAllPost(allId);
//     return allPost;
// }

// udah bisa
export const searchUmkmPostByTopics = async (topicsArr) => {
  const getAllId = async () => {
      const responseUmkm = await db.collection('umkmPost').where('topics','array-contains-any', topicsArr).get();
      const dataUmkm = responseUmkm.docs.map(doc => doc.id);
      return dataUmkm;
  }

  const allId = await getAllId();
  const getAllPost = async (result) => {
      return Promise.all(
          result.map(async (umkmPostId) => {
              const umkmPost = await getUmkmPostById(umkmPostId)
              const umkmImage = await getSingleImageByUmkmPostId(umkmPostId)
              return { umkmPost: umkmPost, umkmImage: umkmImage };
          }));
  };
  const allPost = await getAllPost(allId);
  return allPost;
}



//UDAH BISA BEBAS
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
  const { userId, userName,title, description, minPrice, maxPrice, topics, filePath } = umkmPostData;
  const response = await db.collection('umkmPost').add({
      description: description,
      filePath : filePath,
      maxPrice: maxPrice,
      minPrice: minPrice,
      title: title,
      userId: userId,
      userName : userName,
      topics: topics,
      // location: location,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  const umkmPostId = response.id;
  return umkmPostId;
}

export const editUmkmPost = async (postID, umkmPostData)=>{
  const { title, description, minPrice, maxPrice, topics, filePath } = umkmPostData;
  const response = await db.collection('umkmPost').doc(postID).update({
      description: description,
      filePath : filePath,
      maxPrice: maxPrice,
      minPrice: minPrice,
      title: title,
      topics: topics,
  });
  return response;
}

export const addNewUMKMPostLike = async (data) => {
  const {likerID, postID} = data
  const response = await db.collection('umkmPost').doc(postID).collection('likes').doc(likerID).set
  ({
      likerID: likerID,
  });
  return response;
}
// parent bebas
export const getUmkmPostById = async (umkmPostId) => {
  const doc = await db.collection('umkmPost').doc(umkmPostId).get();
  const responseId = doc.id;
  let responseData = doc.data();
  return { classId: responseId, ...responseData }
}
// DM POST
export const createDMPost = async (DMPostData) => {
  const { userId, userName, title, description, topics, skill, filePath } = DMPostData
  const response = await db.collection('dmPost').add({
      userId: userId,
      userName : userName,
      title: title,
      desc: description,
      topics: topics,
      skill: skill,
      filePath: filePath,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  const postId = response.id;
  return postId;
}

export const editDMPost = async(postID, dmPostData)=>{
  const { title, description, minPrice, maxPrice, topics, filePath } = dmPostData;
  const response = await db.collection('dmPost').doc(postID).update({
      description: description,
      filePath : filePath,
      maxPrice: maxPrice,
      minPrice: minPrice,
      title: title,
      topics: topics,
  });
  return response;
}

export const addNewDMPostLike = async (data) => {
  const {likerID, postID} = data
  const response = await db.collection('dmPost').doc(postID).collection('likes').doc(likerID).set
  ({
      likerID: likerID,
  });
  return response;
}

export const addNewDMPostComment = async (data) => {
  const {commenterID, commentContent, postID} = data
  const response = await db.collection('dmPost').doc(postID).collection('comments').add({
      commenterID: commenterID,
      commentContent: commentContent,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  return response;
}
// UDAH BISA, BEBAS PROMISE
export const getAllDMPostByUserId = async (userId) => {
  const response = await db.collection('dmPost').where("userId", "==", userId).get();
  const data = response.docs.map(doc => {
      const responseId = doc.id;
      const responseData = doc.data();
      return { classId: responseId, ...responseData }
  });
  return data;
}
// UDAH BISA BEBAS
export const getAllDMPost = async () => {
  const getAllId = async () => {
      const responseDm = await db.collection('dmPost').orderBy("timeStamp").get();
      const dataDm = responseDm.docs.map(doc => doc.id);
      return dataDm;
  }
  const allId = await getAllId();
  const getAllPost = async (result) => {
      return Promise.all(
          result.map(async (dmPostId) => {
              const dmPost = await getDmPostById(dmPostId)
              const dmImage = await getSingleImageByDmPostId(dmPostId)
              return { dataPost: dmPost, dataImage: dmImage };
          }));
  };
  const allPost = await getAllPost(allId);
  return allPost;
}

export const  searchDmPostByTopics = async (topicsArr)  => {
  const getAllId = async () => {
      const responseDm = await db.collection('dmPost').where('topics','array-contains-any', topicsArr).get();
      const dataDm = responseDm.docs.map(doc => doc.id);
      return dataDm;
  }
  const allId = await getAllId();
  const getAllPost = async (result) => {
      return Promise.all(
          result.map(async (dmPostId) => {
              const dmPost = await getDmPostById(dmPostId)
              const dmImage = await getSingleImageByDmPostId(dmPostId)
              return { dmPost: dmPost, dmImage: dmImage };
          }));
  };
  const allPost = await getAllPost(allId);
  return allPost;
}

// UDA BISA BEBAS
export const getAllMediaByDmPostId = async (dmPostId) => {
  const getAllMedia = async (result) => {
      return Promise.all(
          result.map((imageRef) => { return getImageUrlByImageRef(imageRef) }));
  };
  const folderPath = '/dm-post-files/' + dmPostId;
  const fileNames = await storage.child(folderPath).listAll();
  const allMedia = await getAllMedia(fileNames.items);
  console.log(allMedia);
  return allMedia;
}

// UDA BISA BEBAS
export const getDmPostById = async (dmPostId) => {
  const doc = await db.collection('dmPost').doc(dmPostId).get();
  const responseId = doc.id;
  let responseData = doc.data();
  return { classId: responseId, ...responseData }
}

//UDA BISA BEBAS
export const getSingleImageByDmPostId = async (dmPostId) => {
  const doc = await db.collection('dmPost').doc(dmPostId).get();
  const fpath = '/dm-post-files/' + dmPostId + '/' + doc.data().filePath;
  const response = await storage.child(fpath).getDownloadURL().then((url) => {
      return url;
  }).catch(function (error) {
      console.log(error)
  });
  return response;
}



//USER
//UDAH BISA BEBAS
export const getUserById = async (userId) => {
  const response = await db.collection('users').doc(userId).get();
  const responseId = response.id;
  const responseData = response.data();
  responseData.profileUrl = await getUserPhotoByUserId(userId)
  return { userId: responseId, ...responseData };
}
// UDAH BISA
export const updateProfileUser = async (userData) => {
  const {mainAddress , phoneNumber, pin, profilePicture, userId} = userData;

  await db.collection('users').doc(userId).update({
      mainAddress: mainAddress,
      phoneNumber : phoneNumber,
      profilePicture : profilePicture,
      pin : pin
    });
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
// UDAH BISA BEBAS
export const getUserPhotoByUserId = async (userId) =>{
  const doc = await db.collection('users').doc(userId).get();
  const fpath = '/user-photo-profile/' + userId + '/' + doc.data().profilePicture;
  // console.log('fpath = ', fpath)
  const response = await storage.child(fpath).getDownloadURL().then((url) => {
      return url;
  }).catch(function (error) {
      console.log(error)
  });
  return response;
}

// export const addCommentByPostID = async (postID) => {

// }

// export const getChatByChatID = async (chatID) => {

// }
//AMBIL CHAT ROOM YANG BERISI CHAT UMKM (UMKMID) DENGAN DM (DMID)
//UDAH BISA
export const getChatRoom = async (userIDs)=>{
  const {DMID, UMKMID} = userIDs;
  const response = await db.collection('chat').where("DMID", "==", DMID).where("UMKMID", "==", UMKMID).get();
  const result = response.docs.map(doc=>doc.id);
  console.log(result[0]);
  //Kalo return undefined, panggil [addNewChatRoom]
  return result;
}

export const getChatRoomConversation = async (chatRoomID)=>{
  const response = await db.collection('chat').doc(chatRoomID).collection('chat').orderBy('time').get();
  const convos = response.docs.map(doc => doc.data());
  return convos;
}

//UDAH BISA
//MENAMBAHKAN CHATROOM BARU 
export const addNewChatRoom = async (usersData) => {
  const { DMID, UMKMID } = usersData
  const response = await db.collection('chat').add({
      DMID: DMID,
      UMKMID: UMKMID,
  });
  return response;
}

//UDAH BISA
//MENAMBAHKAN CHAT BARU DI DALAM CHATROOM
export const addChatTextByChatRoomID = async (chatData) => {
  const { chatRoomID, message, senderID } = chatData
  const response = await db.collection('chat').doc(chatRoomID).collection('chat').add({
      message: message,
      senderID: senderID,
      time: firebase.firestore.FieldValue.serverTimestamp()
  });
  return response;
}

export const addCommentByPostID = async (postID) => {

}

// export const getChatByChatID = async (chatID) => {

// }


export const addChatFileByChatRoomID = async (chatData) => {
  const { chatRoomID, filePath, senderID } = chatData
  const response = await db.collection('chat').doc(chatRoomID).collection('chat').add({
      filePath: filePath,
      senderID: senderID,
      time: firebase.firestore.FieldValue.serverTimestamp()
  });
  return response;
}

export const getAllChatRoom = async (userID, role)=>{
  let fieldName = 'DMID'
  if(role == "creative"){
      fieldName = "UMKMID";
  }
  const response = await db.collection('chat').where(fieldName, "==", userID).get();
  
  const data = response.docs.map(doc => {
      const responseId = doc.id;
      const responseData = doc.data();
      return { repsonseId: responseId, ...responseData }
  });
  console.log(data);
  return data;
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

// BISA, BEBAS PROMISE
export const getAllTransactionHistory = async (userID) => {
  const response1 = await db.collection('transaction').where("userId1", "==", userID).get();
  const response2 = await db.collection('transaction').where("userId2", "==", userID).get();

  const getData1 = async (result) => {
      return Promise.all(
          result.map(async (doc) => {
              const responseId = doc.id;
              const responseData = doc.data();
              responseData.partnerProfile = await getUserById(responseData.userId2)
              return { classId: responseId, ...responseData }
          }));
  };

  const getData2 = async (result) => {
      return Promise.all(
          result.map(async (doc) => {
              const responseId = doc.id;
              const responseData = doc.data();
              responseData.partnerProfile = await getUserById(responseData.userId1)
              return { classId: responseId, ...responseData }
          }));
  };
  const newArr = async (dt1, dt2) =>{
      let dt = dt1.concat(dt2);
      return dt;
  }
  return newArr(await getData1(response1.docs), await getData2(response2.docs));
}

// UDAH BISA
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
  // console.log('res id = ', responseId, ' response data = ', responseData);
  return { classId: responseId, ...responseData }
}

// UDAH BISA
export const addProspectTransaction = async (prospectTransactionData) => {
  const { bidPrice, message, receiverId, senderId } = prospectTransactionData;
  const response = await db.collection('prospectTransaction').add({
      bidPrice: bidPrice,
      message: message,
      receiverId: receiverId,
      receiverName: receiverName,
      senderId: senderId,
      senderName : senderName,
      status: 'NEW'
  });
  const respId = response.id;
  return respId;
}
// UDAH BISA
export const updateProspectTransaction = async (prosTransId, newStatus) => {
  await db.collection('prospectTransaction').doc(prosTransId).update({
      status: newStatus
    })
}

// UDAH BISA
export const convertProspectToTransaction = async (transactionProspectID) => {
  await updateProspectTransaction(transactionProspectID, 'ACCEPT')
  const prospectRes = await getProspectTransactionByProsTransId(transactionProspectID);
  const response = await db.collection('transaction').add({
      transactionNo: 'TRN123123',
      price: prospectRes.bidPrice,
      message: prospectRes.message,
      userId1: prospectRes.receiverId,
      userName1 : prospectRes.receiverName,
      userId2: prospectRes.senderId,
      userName2 : prospectRes.senderName,
      status: 'Menunggu penyelesaian kontrak kerja'
  });
}