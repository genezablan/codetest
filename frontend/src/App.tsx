import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUserProfile } from "../../backend/api/users.interface";

const API_URL = "http://localhost:8080/users";

const getAllProfiles = async (): Promise<IUserProfile[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createProfile = async (profile: IUserProfile): Promise<IUserProfile> => {
  const response = await axios.post(API_URL, profile);
  return response.data;
};

interface DataItem {
  id: number;
  value: string;
  number: number;
}

// Generates a large array of data items for demonstration purposes, do not need to modify.
const generateDataItems = (count: number): DataItem[] => {
  return Array.from({ length: count }, (v, k) => ({
    id: k,
    value: `Item ${k}`,
    number: Math.floor(Math.random() * 100),
  }));
};

const DataTable: React.FC = () => {
  const [dataItems] = useState<DataItem[]>(
    generateDataItems(1000)
  );
  const [searchTerm, setSearchTerm] = useState("");

  const processedItems = (() => {
    return dataItems.reduce<DataItem[]>((acc, item) => {
      if (item.value.toLowerCase().includes(searchTerm.toLowerCase())) {
        const newItem = { ...item, number: item.number * 2 };
        return [...acc, newItem];
      }
      return acc;
    }, []);
  })();
  
  const total = dataItems
  .flat() // Flatten the nested array into a single array of products
  .reduce((sum, product) => sum + product.number, 0);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {processedItems.map((item) => (
            <tr key={Math.random()}>
              <td>{item.id}</td>
              <td>{item.value}</td>
              <td>{item.number}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const UserProfileForm: React.FC = () => {
  const [profile, setProfile] = useState<IUserProfile>({
    name: "",
    email: "",
    age: 0,
    tags: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const created = await createProfile(profile);

    setProfile( created );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={profile.age}
          onChange={handleChange}
        />
      </div>
      {/* Add inputs for tags if needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

const UserProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState<IUserProfile[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const fetchedProfiles = await getAllProfiles();
      setProfiles(fetchedProfiles);
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h2>Task 1: User Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile._id}>
            {profile.name} - {profile.email}
            {/* Display tags if present */}
            {profile.tags &&
              profile.tags.map((tag, index) => (
                <span key={index}> {tag} </span>
              ))}
          </li>
        ))}
      </ul>
      <hr />
      <h2>Task 2: Data table</h2>
      <DataTable />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1>User Profile Management</h1>
      <UserProfileForm />
      <UserProfileList />
    </div>
  );
};

export default App;
