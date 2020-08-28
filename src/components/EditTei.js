import { useDataMutation } from "@dhis2/app-runtime";
import {
  Button,
  Modal,
  ReactFinalForm,
  ModalContent,
  InputFieldFF,
} from "@dhis2/ui";
import React, { useState } from "react";

const mutation = {
  resource: "trackedEntityInstances",
  type: "update",
  partial: "true",
  id: ({ id }) => id,
  data: ({ name }) => ({
    name,
  }),
  /* @TODO: add a mutation for updating a specific visualization */
};

const { Field } = ReactFinalForm;

export const EditTei = ({ id, refetch }) => {
  const [toggle, setToggle] = useState(false);
  const edit = (values) => {
    mutate({ id, name: values.Fname }).then(refetch);
  };
  const [mutate, { loading }] = useDataMutation(mutation);
  return (
    <React.Fragment>
      {" "}
      {/* disable set to true until i finish its implementation*/}
      <Button secondary disabled={true} onClick={() => setToggle(true)}>
        Edit
      </Button>
      {toggle && (
        <Modal small>
          <ModalContent>
            <ReactFinalForm.Form onSubmit={edit}>
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    required
                    label="First name"
                    name="Fname"
                    component={InputFieldFF}
                  />
                  <Field
                    required
                    label="Last name"
                    name="Lname"
                    component={InputFieldFF}
                  />
                  <Button primary type="submit">
                    Submit
                  </Button>
                </form>
              )}
            </ReactFinalForm.Form>
          </ModalContent>
        </Modal>
      )}
    </React.Fragment>
  );
};
