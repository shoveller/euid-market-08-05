
import pb from '/src/lib/api/pocketbase';

export function createData(args) {
  const data = {
    "status": args.status,
    "type": args.type,
    "location": args.location,
    "title": args.title,
    "requirements": args.requirements,
    "time": args.time,
    "max_people": args.max_people,
    "curr_people": args.curr_people,
    "content": args.content,
    "category": args.category,
    "stack": args.stack
  };
  return data;
}

export async function addData(data) {
  const record = await pb.collection('posts').create(data);
}

export async function getData() {
  const result = await pb.collection('posts').getFullList();
  return result;
}

// export async function getData() {
//   const response = await fetch(
//     `${import.meta.env.VITE_PB_API}/collections/posts/records`
//   );
//   response.data = await response.json();
//   const items = response.data.items;
//   return items;
// }

export async function getQuestionData() {
  const resultList = await pb.collection('posts').getFullList({
    filter: 'category = "질의응답"'
  });
  return resultList;
}

export async function getTogetherData() {
  const resultList = await pb.collection('posts').getFullList({
    filter: 'category = "같이해요"'
  });
  return resultList;
}

export async function getUserData(userID) {
  const record = await pb.collection('users').getOne(userID);
  return record;
}

export async function getUserProfilePicture(item, fileName="user_photo") {
  return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item[fileName]}`
}

export async function getOneData(id, collection) {
  const data = await pb.collection(collection).getOne(id, { requestKey:null });
  return data
}

export function cancelRequests() {
  const controller = new AbortController();
  controller.abort();
  pb.cancelAllRequests();
}

