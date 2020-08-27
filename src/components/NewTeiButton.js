import { useDataMutation } from "@dhis2/app-runtime";
import { Button } from "@dhis2/ui";

const mutation = {
  resource: "trackedEntityInstances",
  data: ({ name }) => ({
    name,
    type: "SINGLE_VALUE",
  }),
  type: "create",
  /* @TODO: add a mutation for creating a NEW visualization */
  /* Use this data payload:
        {
            name: 'AAA_TEST',
            type: 'SINGLE_VALUE'
        }
    */
};

export const NewTeiButton = ({ refetch }) => {
  const [mutate, { loading, engine }] = useDataMutation(mutation);
  const onClick = async () => {
    // const { me } = await engine.query(query);
    await mutate({ name: `AAA_TEST_${me.name}` });
    refetch();
  };

  //disabled should be "loading", but i disabled it until the button is corectly coded
  return (
    <Button primary disabled={true} onClick={onClick}>
      + New
    </Button>
  );
};
