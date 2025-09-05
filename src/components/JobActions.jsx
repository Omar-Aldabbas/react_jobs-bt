import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const addJobAction = async ({ request }) => {
  const formData = await request.formData();
  const newJob = {
    title: formData.get("title"),
    type: formData.get("type"),
    location: formData.get("location"),
    description: formData.get("description"),
    salary: formData.get("salary"),
    company: {
      name: formData.get("company"),
      description: formData.get("company_description"),
      email: formData.get("contact_email"),
      phone: formData.get("contact_phone"),
    },
  };

  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newJob),
  });
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to add job");
  }
  toast.success("Job Added successfully");
  const createdJob = await res.json();

  return redirect(`/jobs/${createdJob.id}`);
};

export const deleteJob = async (id) => {
  try {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete job");
    }
    toast.success("Job deleted successfully");

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};


export const editJobAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedJob = {
    title: formData.get("title"),
    type: formData.get("type"),
    location: formData.get("location"),
    description: formData.get("description"),
    salary: formData.get("salary"),
    company: {
      name: formData.get("company"),
      description: formData.get("company_description"),
      email: formData.get("contact_email"),
      phone: formData.get("contact_phone"),
    },
  };

  const res = await fetch(`/api/jobs/${params.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedJob),
  });

  if (!res.ok) {
    throw new Error("Failed to update job");
  }

  const job = await res.json();
  toast.success("Job updated successfully");

  return redirect(`/jobs/${job.id}`);
};
