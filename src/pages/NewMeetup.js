import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  // async function addMeetupHandler(enteredMeetupData) {
  //   const response = await fetch("/api/new-meetup", {
  //     method: "POST",
  //     body: JSON.stringify(enteredMeetupData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm />
    </section>
  );
}
