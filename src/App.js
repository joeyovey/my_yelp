import React, { useState, useEffect } from 'react';
import { listRestaurants } from "./graphql/queries";
import { createRestaurant, deleteRestaurant } from "./graphql/mutations";
import "@aws-amplify/ui-react/styles.css";
import './App.css';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';
import { generateClient } from 'aws-amplify/api';
import { withAuthenticator, View, Heading, Button} from '@aws-amplify/ui-react';

// import yelpLogo from './yelp-logo.png';

Amplify.configure(awsmobile);
const client = generateClient();

function App({ signOut }) {
  const [restaurantList, setRestaurantList] = useState([]);
  const [input, setInput] = useState({
    name: "",
    description: "",
    city: "",
  });

  const getRestaurantListFromAPI = async () => {
    const result = await client.graphql({ query: listRestaurants });
    const restaurantsFromAPI = result.data.listRestaurants.items;
    setRestaurantList(restaurantsFromAPI);
  };

  const createARestaurant = async (e) => {
    e.preventDefault();
    await client.graphql({
      query: createRestaurant,
      variables: { input: input },
    });
    getRestaurantListFromAPI();
    setInput({ name: "", description: "", city: "" });
  };

  const deleteARestaurant = async ({ id }) => {
    const newRestaurantList = restaurantList.filter((item) => item.id !== id);
    setRestaurantList(newRestaurantList);
    try {
      await client.graphql({
        query: deleteRestaurant,
        variables: { input: { id } },
      });
    } catch (e) {
      console.log({ Error: e?.message });
    }
  };

  useEffect(() => {
    getRestaurantListFromAPI();
  }, []);

  return (
    <React.Fragment>
      <header className="app-header">
        {/* Replace the text heading with the Yelp logo */}
        {/* <img src={yelpLogo} alt="Yelp Logo" className="yelp-logo" /> */}
        <Button variation="primary" onClick={signOut}>
          Sign Out
        </Button>
      </header>

      <main className="app-content">
        <section className="add-restaurant-section">
          <Heading level={4} className="section-heading">
            Add a Restaurant
          </Heading>
          <View as="form" className="restaurant-form" onSubmit={createARestaurant}>
            <input
              placeholder="Restaurant Name"
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              className="input-field"
              required
            />
            <input
              placeholder="Description"
              value={input.description}
              onChange={(e) =>
                setInput({ ...input, description: e.target.value })
              }
              className="input-field"
              required
            />
            <input
              placeholder="Restaurant City"
              value={input.city}
              onChange={(e) => setInput({ ...input, city: e.target.value })}
              className="input-field"
              required
            />
            <Button type="submit" className="create-button">
              Create Restaurant
            </Button>
          </View>
        </section>

        <section className="restaurant-list-section">
          <Heading level={4} className="section-heading">
            List of Restaurants ({restaurantList.length})
          </Heading>
          {restaurantList.length > 0 ? (
            <table className="restaurant-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {restaurantList.map((item, key) => (
                  <tr key={key}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.city}</td>
                    <td>
                      <Button
                        className="delete-button"
                        onClick={() => deleteARestaurant(item)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No restaurants available. Please add one!</p>
          )}
        </section>
      </main>
    </React.Fragment>
  );
}

export default withAuthenticator(App);