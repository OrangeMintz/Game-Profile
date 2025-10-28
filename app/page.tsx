import DialogComponent from "@/components/DialogComponent";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      <DialogComponent
        triggerLabel="Delete Account"
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
      >
        <div className="mt-4 flex justify-end gap-2">
          <button className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Confirm Delete
          </button>
        </div>
      </DialogComponent>
    </div>
  );
}
