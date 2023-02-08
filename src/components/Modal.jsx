import useModalStore from '../store';

export default function Modal() {
  const closeModal = useModalStore((state) => state.closeModal);
  return (
    <div className="border border-black flex w-fit">
      <select name="type" id="type">
        <option value="type">Type</option>
        <option value="grass">Grass</option>
        <option value="grass">Water</option>
        <option value="grass">Fire</option>
      </select>
      <p></p>
      <button
        onClick={() => {
          closeModal();
        }}
      >
        Close
      </button>
    </div>
  );
}
