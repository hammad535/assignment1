$(document).ready(function() {

    $("#addButton").click(function() {
        $("#formContainer").show();
    });

    // Event delegation for delete button click
    $(".second-div").on("click", ".delete-button", function() {
        $(this).parent(".profile-container").remove();
    });

    $("#submitForm").click(function() {
        var companyName = $("#companyName").val();
        var jobTitle = $("#jobTitle").val();
        var duration = $("#duration").val();
        var jobType = $("#jobType").val();
        var country = $("#country").val();
        var skills = $("#skills").val();

        if (companyName && jobTitle && duration && jobType && country && skills) {
            var newProfileContainer = `
            <div class="profile-container">
                    <div class="profile-pic">
                        <img src="images\\myhome.svg" alt="Profile Pic">
                    </div>
                    <div class="profile-info">
                        <p>${companyName}</p>
                        <p class="senior">${jobTitle}</p>
                        <p><span class="day">${duration}</span><span class="job">${jobType}</span> <span class="c">${country}</span></p>
                    </div>
                    <div class="skills">
                        <p class="T">${skills}</p>
                    </div>
                    <button class="delete-button">Delete</button>
            </div>
            `;

            $(".second-div").append(newProfileContainer);
            $("#companyName").val("");
            $("#jobTitle").val("");
            $("#duration").val("");
            $("#jobType").val("");
            $("#country").val("");
            $("#skills").val("");

        }

        $("#formContainer").hide();
    });


    var enteredSkills = [];

$("#searchInput").keypress(function(event) {
// Check if the Enter key is pressed (key code 13)

if (event.which === 13) {
$("#clearButton").show();
var searchSkill = $(this).val().toLowerCase();

// Add the entered skill to the array of entered skills
enteredSkills.push(searchSkill);

// Loop through each profile container and filter based on entered skills
$(".profile-container").each(function() {
    var skills = $(this).find(".skills p.T").text().toLowerCase();
    var showProfile = enteredSkills.every(function(skill) {
        return skills.includes(skill);
    });

    // If the profile container contains all entered skills, show it; otherwise, hide it
    if (showProfile) {
        $(this).show();
    } else {
        $(this).hide();
    }
});

// Clear the search input after processing entered skill
 
}


});
   



$("#clearButton").click(function() {
$("#searchInput").val('');
$(".profile-container").show();
$(this).hide();
});
});
      $(document).ready(function() {

                $("#addButton").click(function() {
                    $("#formContainer").show();
                });
    
                // Event delegation for delete button click
                $(".second-div").on("click", ".delete-button", function() {
                    $(this).parent(".profile-container").remove();
                });
    
                $("#submitForm").click(function() {
                    var companyName = $("#companyName").val();
                    var jobTitle = $("#jobTitle").val();
                    var duration = $("#duration").val();
                    var jobType = $("#jobType").val();
                    var country = $("#country").val();
                    var skills = $("#skills").val();
    
                    if (companyName && jobTitle && duration && jobType && country && skills) {
                        var newProfileContainer = `
                        <div class="profile-container">
                                <div class="profile-pic">
                                    <img src="images\\myhome.svg" alt="Profile Pic">
                                </div>
                                <div class="profile-info">
                                    <p>${companyName}</p>
                                    <p class="senior">${jobTitle}</p>
                                    <p><span class="day">${duration}</span><span class="job">${jobType}</span> <span class="c">${country}</span></p>
                                </div>
                                <div class="skills">
                                    <p class="T">${skills}</p>
                                </div>
                                <button class="delete-button">Delete</button>
                        </div>
                        `;
    
                        $(".second-div").append(newProfileContainer);
                        $("#companyName").val("");
                        $("#jobTitle").val("");
                        $("#duration").val("");
                        $("#jobType").val("");
                        $("#country").val("");
                        $("#skills").val("");
    
                    }
    
                    $("#formContainer").hide();
                });


                var enteredSkills = [];

    $("#searchInput").keypress(function(event) {
        // Check if the Enter key is pressed (key code 13)
       
        if (event.which === 13) {
            $("#clearButton").show();
            var searchSkill = $(this).val().toLowerCase();

            // Add the entered skill to the array of entered skills
            enteredSkills.push(searchSkill);

            // Loop through each profile container and filter based on entered skills
            $(".profile-container").each(function() {
                var skills = $(this).find(".skills p.T").text().toLowerCase();
                var showProfile = enteredSkills.every(function(skill) {
                    return skills.includes(skill);
                });

                // If the profile container contains all entered skills, show it; otherwise, hide it
                if (showProfile) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });

            // Clear the search input after processing entered skill
             
        }
       
        
    });
               



    $("#clearButton").click(function() {
        $("#searchInput").val('');
        $(".profile-container").show();
        $(this).hide();
    });
});
                 