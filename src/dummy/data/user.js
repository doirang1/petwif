let users = [
  {
    id: '1',
    name: '김용민',
    email: 'dydals3440@gmail.com',
    age: '24',
    username: 'dydals3440',
    password: '$2a$12$ndKutlx7uVUq4bNYTbQvNevyoZDTH5bVIy.jFlpB7sqewn3wQudzG',
  },
  {
    id: '2',
    name: 'Elon Musk',
    email: 'elone@gmail.com',
    age: '45',
    username: 'elonmusk1004',
    password: '$2a$12$ndKutlx7uVUq4bNYTbQvNevyoZDTH5bVIy.jFlpB7sqewn3wQudzG',
  },
];

export const mockPostSignup = async (formData) => {
  // 모의 데이터 확인
  const existingUser = users.find((user) => user.email === formData.email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  // 여기서 실제로 사용자 등록 로직을 수행합니다.
  users.push({
    ...formData,
    id: formData.email,
    password: formData.password, // 암호화는 제외
  });
  return { id: formData.email };
};

// export async function findByUsername(username) {
//   return users.find((user) => user.username === username);
// }

// export async function findById(id) {
//   return users.find((user) => user.id === id);
// }

// export async function createUser(user) {
//   const created = { ...user, id: Date.now().toString() };
//   users.push(created);
//   return created.id;
// }
