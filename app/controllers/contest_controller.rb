class ContestController < ApplicationController

	def index
        # For later use to retrieve slogan_submission table through an API / debugging
        @slogans = Event.first.slogan_submissions
    end

    def new
		@slogan_submission = SloganSubmission.new
	end

	def create
    	# render plain: slogan_submission_params.inspect
        # render plain: Event.first.inspect

        # @slogan_submission = SloganSubmission.new slogan_submission_params

        # @slogan_submission = SloganSubmission.create(slogan_submission_params)
        @slogan_submission = Event.first.slogan_submissions.create(slogan_submission_params)

        # {"firstName":"myfirstname", "lastName":"myLASTNAME","email":"MYEMAIL@EMAIL.COM", "slogan":"HELLO SLOGAN"}
        render plain: @slogan_submission.inspect
        saved = @slogan_submission.save
        # p saved
 	end

 	def show
        # For later use to retrieve slogan_submission table through an API
 	end

    private
 	def slogan_submission_params
        # {\"slogan_submission\":{\"firstName\":\"myfirstname\", \"lastName\":\"myLASTNAME\",\"email\":\"MYEMAIL@EMAIL.COM\", \"slogan\":\"HELLO SLOGAN\"}}
# curl -d {"firstName":"myfirstname", "lastName":"myLASTNAME","email":"MYEMAIL@EMAIL.COM", "slogan":"HELLO SLOGAN"} -H "Content-Type: application/json" -X POST http://localhost:3001/contest
        # params[:slogan_submission]
 		params.require(:slogan_submission).permit(:firstName, :lastName, :email, :slogan)
 	end

end
