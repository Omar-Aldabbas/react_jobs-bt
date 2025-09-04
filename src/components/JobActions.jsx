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

  return res.json();
};

export const deleteJob = async (id) => {
  try {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete job");
    }

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};