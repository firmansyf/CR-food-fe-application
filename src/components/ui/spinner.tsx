import ClipLoader from "react-spinners/ClipLoader";

interface Props {
    label: string
    loading: boolean
}

export default function SpinnerLoad({label, loading} : Props) {
    return (
        <div className='flex items-center justify-center gap-2 h-[50vh] w-full'>
        <ClipLoader
            color={'#2B9348'}
            loading={loading}
            // cssOverride={override}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
            <span>{label}</span>
      </div>
    )
}