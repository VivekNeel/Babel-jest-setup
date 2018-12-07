import React from "react";
import Link from "./Hello";
import renderer from "react-test-renderer";

jest.mock('react-native-gesture-handler', () => {});


it("renders correctly", () => {
      const tree = renderer
        .create( < Link page = "http://www.facebook.com" > Facebook < /Link>)
          .toJSON(); expect(tree).toMatchSnapshot();
        });