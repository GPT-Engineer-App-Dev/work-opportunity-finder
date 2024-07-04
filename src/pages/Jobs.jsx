import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl">Jobs Page</h1>
      <p>List of jobs will be displayed here.</p>
      <div className="mt-6">
        {[1, 2, 3].map((job) => (
          <div key={job} className="mb-4">
            <h2 className="text-xl font-bold">Software Engineer</h2>
            <p>Company Name</p>
            <p>Location</p>
            <Button
              variant="link"
              className="mt-2"
              onClick={() => navigate(`/apply/${job}`)}
            >
              Apply Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;